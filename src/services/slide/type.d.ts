import { UUID } from "crypto";

declare module 'AppModels' {
    export type TCreateSlideRequest = {
        title: string;
        description: string;
        price: number;

        thumbnailUrlFile: File;
        slideFile: File;

        totalPages: number;
        isPublished: boolean;
        isFeatured: boolean;

        createdBy: string;

        tags: string[];
        categories: string[];
    };
    
    export type TGetListSlideRequest = {
        keyword: string,
        slideCategories: UUID[],
        sortOption: SortOption,
        pagingOption: PaginationOption
    }

    export type TGetListSlideCategoriesRequest = {
        keyword: string,
        sortOption: SortOption,
        pagingOption: PagingOption
    }
}