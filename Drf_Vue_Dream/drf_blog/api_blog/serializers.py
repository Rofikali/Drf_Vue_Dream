from pydoc import importfile
from rest_framework.serializers import (
    ModelSerializer,
    HyperlinkedIdentityField,
    SerializerMethodField
)
from .models import Post


class PostListSerializer(ModelSerializer):
    # author = ProfileSerializer()
    author = SerializerMethodField()

    def get_author(self, obj):
        return obj.author.username

    detail_url = HyperlinkedIdentityField(
        view_name='detail',
        lookup_field='pk'
    )

    author = HyperlinkedIdentityField(
        view_name='particular-user-posts',
        lookup_field='author'
    )

    class Meta:
        model = Post
        fields = [
            'id', 'title', 'content', 'date_posted', 'author', 'detail_url'
        ]


class PostDetailSerializer(ModelSerializer):
    author = SerializerMethodField()

    def get_author(self, obj):
        return obj.author.username

    author = HyperlinkedIdentityField(
        view_name='particular-user-posts',
        lookup_field='author'
    )

    class Meta:
        model = Post
        fields = [
            'id', 'title', 'content', 'date_posted', 'author'
        ]


class PostUpdateSerializer(ModelSerializer):
    class Meta:
        model = Post
        fields = [
            'id', 'title', 'content', 'date_posted', 'author'
        ]
    author = SerializerMethodField()

    def get_author(self, obj):
        return obj.author.username
