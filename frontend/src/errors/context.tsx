import React from "react";
import Alert from 'react-bootstrap/Alert';

type Callback = () => void;

type ErrorCallback = (message: string, error: Error) => void;
const defaultErrorCallback = (_message: string, _error: Error) => { };

const ErrorHandlerContext = React.createContext(defaultErrorCallback);

let setError = defaultErrorCallback;


interface ErrorProps {
  children: React.ReactNode,
  callback?: ErrorCallback;
}

const ErrorHandlerProvider = (props: ErrorProps) => {
  if (props.callback) {
    setError = props.callback;
  }

  return (
    <ErrorHandlerContext.Provider value={setError}>
      {props.children}
    </ErrorHandlerContext.Provider>
  );
};

interface DialogProps {
  message: string;
  error: Error;
  onClose: Callback;
}

const ErrorDialog = (props: DialogProps) => {
  return (<Alert variant={"danger"} onClose={props.onClose}>
    <Alert.Heading>Error!</Alert.Heading>
    {props.message}
  </Alert>);
};

export const ErrorContainer = (props: ErrorProps) => {
  const [error, setError] = React.useState<Error | undefined>();
  const [errorTitle, setErrorMessage] = React.useState<string>("");

  if (error) {
    console.error("Error raised!");
    console.error(`${errorTitle}:`, JSON.stringify(error));
  }

  const callback = React.useCallback((message: string, err: Error) => {
    setError(err);
    setErrorMessage(message);
  }, []);

  return (
    <ErrorHandlerProvider callback={callback}>
      {error && (<ErrorDialog
        message={errorTitle}
        error={error}
        onClose={() => {
          setError(undefined);
          setErrorMessage("");
        }} />)
      }
      {props.children}
    </ErrorHandlerProvider >

  );
};

export const useErrorHandler = () => React.useContext(ErrorHandlerContext);
