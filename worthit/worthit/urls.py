from django.conf.urls import patterns, include, url
from django.contrib import admin

urlpatterns = patterns('',
    # Examples:
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),
    url(r'^$', 'app.views.home'),
    url(r'^mobileRate', 'app.views.mobileRate'),
    url(r'^TVrate', 'app.views.TVrate'),
    url(r'^booksRate', 'app.views.booksRate'),
    url(r'^mobileView', 'app.views.mobileView'),
    url(r'^TVview', 'app.views.TVview'),
    url(r'^booksView', 'app.views.booksView')
)
