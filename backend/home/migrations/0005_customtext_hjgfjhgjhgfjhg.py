# Generated by Django 2.2.16 on 2020-10-28 08:17

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ("home", "0004_hgfjhfh_hgjfkhfghfgjfjh"),
    ]

    operations = [
        migrations.AddField(
            model_name="customtext",
            name="hjgfjhgjhgfjhg",
            field=models.ForeignKey(
                blank=True,
                null=True,
                on_delete=django.db.models.deletion.CASCADE,
                related_name="customtext_hjgfjhgjhgfjhg",
                to="home.CustomText",
            ),
        ),
    ]
