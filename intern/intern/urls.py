from django.conf.urls import patterns, include, url
from django.contrib import admin
from intern.application import views

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'intern.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),
    url(r'^$', views.index, name='index')
)
