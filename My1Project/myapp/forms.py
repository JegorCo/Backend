from django import forms
from myapp.models import User


class MyProfileForm(forms.ModelForm):
    GENDER_CHOICES = (('Парень', 'Парень'), ('Парень', 'Девушка'),)
    image = forms.ImageField(widget=forms.FileInput(attrs={'type':"file", 'name':"file", 'id':"inputFile", 'accept':"static/image/*",}))
    name_surname = forms.CharField(widget=forms.TextInput(attrs={'type':"text", 'id':"name", 'name':"name", 'placeholder':"Саша Фефелов", 'class':"name"}))
    gender = forms.ChoiceField(
        choices=GENDER_CHOICES,
        widget=forms.RadioSelect(attrs={'class': 'radio-label',}),)
    birth_date = forms.DateTimeField(widget=forms.DateTimeInput(attrs={'type':"date", 'id':"start", 'name':"trip-start", 'class':"date"}))
    telegram = forms.CharField(widget=forms.TextInput(attrs={'type':"text", 'id':"Telegram", 'name':"Telegram", 'placeholder':"Телеграм(без @)", 'class':"telega"}))
    phone_number = forms.CharField(widget=forms.TextInput(attrs={'type':"text", 'id':"numberphone", 'name':"numberphone", 'placeholder':"+79084268256", 'class':"number"}))
    about = forms.CharField(widget=forms.Textarea(attrs={'name':"aboutmee", 'id':"", 'cols':"30", 'rows':"10", 'style':"width:410px; height:150px;", 'class' : "aboutmee", 'placeholder':"Мне нравится дебоширить, ломать мебель, устраивать пьянки и вообще капец"}))

    class Meta:
        model = User
        fields = '__all__'


    
 