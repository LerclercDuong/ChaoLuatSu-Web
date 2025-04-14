declare module "Appmodels" {
    type TCreatePresentationRequest = {
        title: string,
        description: string,
        price: number,
        coverImageFile: File,
        presentationFile: File[],
        isPublic: boolean,
        tags: string[],
        categories: string[],
        createdBy: string
    }
    type TGetListPresentationRequest = {
        keyword: string,
        category: UUID[],
        sortOption: SortOption,
        pagingOption: PaginationOption
    }
    type TGetListPresentationCategoryRequest = {
        keyword: string,
        sortOption: SortOption,
        pagingOption: PaginationOption
    }
}