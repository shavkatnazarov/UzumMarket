package uzum.uzum.full;


import uzum.uzum.payload.ApiResponse;
import uzum.uzum.payload.ProductDto;

public interface IntProductService {
    ApiResponse addProduct(ProductDto productDto);

    ApiResponse editProduct(Integer id, ProductDto productDto);

    ApiResponse deleteProduct(Integer id);
}
