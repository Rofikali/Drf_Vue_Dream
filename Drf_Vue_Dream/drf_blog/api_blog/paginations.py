from rest_framework.pagination import PageNumberPagination, LimitOffsetPagination


# class TestingPagenumberPagination(PageNumberPagination):
#     page_size = 5
#     page_size_query_param = 'page_size'
#     max_page_size = 10


class TestingOffsetPagination(LimitOffsetPagination):
    default_limit = 5
    limit_query_param = 'limit'
    max_limit = 10
