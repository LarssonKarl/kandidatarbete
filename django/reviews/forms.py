from django import forms

from .models import Review

# class ReviewCreateForm(forms.Form):
#     title       = forms.CharField()
#     location    = forms.CharField()
#     text        = forms.CharField(required=False)


class ReviewCreateForm(forms.ModelForm):
    class Meta:
        model = Review
        fields = [
            'title',
            'location',
            'text',
                    
        ]
