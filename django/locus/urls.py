
from django.conf.urls import url
from django.contrib import admin
from django.views import generic
from reviews.views import about_view, ReviewsListView, ReviewsDetailView, ReviewCreateView

from django.contrib.auth.views import LoginView


urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^login/$', LoginView.as_view(), name = 'login'),
    url(r'^$', generic.TemplateView.as_view(template_name='home.html')),
    url(r'^reviews/$', ReviewsListView.as_view()),
    url(r'^reviews/create/$', ReviewCreateView.as_view()),
    url(r'^reviews/(?P<slug>[\w-]+)/$', ReviewsDetailView.as_view()),
    url(r'^about/$', about_view),

]

