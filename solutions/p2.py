text = """
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum rhoncus egestas. Nam laoreet, libero vel dignissim hendrerit, eros est posuere lacus, ut tincidunt lorem orci sed sem. Cras sagittis bibendum fringilla. Quisque luctus nunc non arcu cursus fermentum. Vivamus accumsan eu elit in ullamcorper. Praesent bibendum venenatis purus non interdum. Nullam congue at turpis vulputate fermentum. Praesent dui ante, convallis non pretium at, interdum aliquam nibh. Aenean fringilla gravida lacus, a scelerisque nibh finibus ultricies. Aliquam ut neque in nibh molestie tincidunt. Suspendisse ut mi at metus rutrum condimentum ac ac est.

Integer ullamcorper tortor non dui sollicitudin posuere. Nullam dignissim hendrerit sem, quis lobortis massa sagittis id. Praesent tincidunt pulvinar nibh sit amet dapibus. Cras vel erat urna. Sed eu nisl tortor. Pellentesque tincidunt ipsum molestie, hendrerit mauris et, blandit nulla. Aenean bibendum lobortis nunc, sit amet vulputate lacus. Nam vitae odio id ante pulvinar accumsan non vel ex. Etiam suscipit fermentum risus ac mollis.

Nunc dapibus molestie mi vel convallis. Nulla nec pretium lectus, vel molestie nulla. Suspendisse consequat vehicula ligula, vel dictum elit sodales id. Nam vel auctor ipsum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras tempus hendrerit ante viverra tincidunt. Donec varius a erat vel sodales. Ut vel luctus libero. Nullam quis nibh in velit ornare pretium.

Nam blandit tristique urna at viverra. Curabitur pellentesque leo in eros vestibulum, a mattis nisi accumsan. Donec viverra semper libero, et auctor lacus. Sed tellus felis, fermentum vel malesuada eget, aliquam ac nisi. Nulla pharetra mauris in finibus placerat. Integer consequat mollis sem, egestas convallis nulla consectetur eget. In laoreet turpis vel magna aliquet aliquam. Maecenas sollicitudin massa eros, pretium suscipit ex ornare accumsan. Proin a massa volutpat, malesuada turpis vel, semper lectus. Praesent semper cursus libero, et ultrices augue tincidunt sed. Suspendisse potenti.

Vivamus finibus neque nisl. Vestibulum ut neque ligula. Proin nisl risus, ultrices nec felis at, porttitor suscipit sapien. Phasellus dictum, ante at consequat lobortis, metus elit vehicula metus, eu imperdiet ex nisl sed mauris. Suspendisse dui nibh, aliquet ac velit eu, pretium mollis leo. Phasellus quis pretium lectus, a fermentum ipsum. Quisque pretium pulvinar massa quis rutrum. Sed et erat in nisl facilisis vestibulum nec facilisis felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed non orci at dui facilisis interdum. Nullam ut ligula luctus, ornare magna id, tincidunt dui.

Quisque fringilla at metus id interdum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed rutrum posuere ultricies. Phasellus sed justo viverra, venenatis ante eu, ornare leo. Morbi tempus nisl vel quam laoreet semper. Duis luctus fringilla sollicitudin. Suspendisse auctor lacinia magna, a iaculis ante iaculis a. Curabitur pellentesque tortor quis ligula dapibus porttitor. Vivamus elementum quis velit nec scelerisque.

In auctor lectus id lobortis vestibulum. Etiam accumsan magna non magna semper varius. Etiam augue dui, varius ut aliquet id, malesuada ac ex. Sed auctor diam id elit semper, quis dignissim sem varius. Phasellus dolor purus, varius eu erat auctor, laoreet ornare mi. Aenean imperdiet bibendum laoreet. Quisque accumsan egestas elit, eleifend porta dolor vulputate ac. Mauris fringilla metus vitae nisi placerat aliquet. Fusce laoreet urna id velit blandit dictum quis in neque. Nam pretium est neque, at sodales magna consectetur ut.

Etiam condimentum ac dolor a aliquam. Nunc ante enim, lacinia quis consectetur id, dictum vitae elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam ut consequat mauris, a tincidunt libero. Morbi in augue lectus. Mauris condimentum convallis nibh sed cursus. Phasellus efficitur dapibus nunc, eget porttitor sem dapibus a. Mauris dictum efficitur tortor at vehicula. Quisque eget ante at lectus convallis placerat. Curabitur tincidunt eget elit et vehicula.

Sed interdum sem sit amet dignissim tincidunt. Nam a orci a libero mollis cursus. Nulla volutpat gravida orci, quis cursus libero dictum vel. In hac habitasse platea dictumst. Donec velit turpis, tempor et tortor in, commodo tincidunt augue. Duis id semper massa. Pellentesque congue nec odio at auctor.

Praesent porttitor dolor quis ipsum semper, ut tincidunt nibh gravida. Fusce imperdiet, quam eget eleifend imperdiet, lacus urna iaculis ligula, sit amet ornare orci ipsum sit amet est. In fermentum leo eu ex bibendum ultrices. Vestibulum egestas arcu eget commodo tincidunt. Suspendisse a porta odio, ut egestas elit. Suspendisse vulputate faucibus blandit. Sed in rhoncus erat, rhoncus tempus velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin malesuada eros vitae varius finibus. Quisque posuere sit amet lacus nec commodo. Quisque nec imperdiet leo. Duis molestie ligula eget ligula porttitor, eu molestie velit vestibulum. Etiam fringilla vehicula bibendum.
"""

from collections import Counter

t = "".join([
    s.replace(",", "").replace(".", "").lower()
    for s in text.strip().split()
])

count = Counter(t)
s = sum(count.values())
print(s)
