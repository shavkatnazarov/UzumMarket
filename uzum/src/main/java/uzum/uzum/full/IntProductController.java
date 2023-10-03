package uzum.uzum.full;

import org.springframework.http.HttpEntity;
import uzum.uzum.payload.ProductDto;

public interface IntProductController {
    HttpEntity<?> getProduct();

    HttpEntity<?> getOneProduct(Integer id);

    HttpEntity<?> addProduct(ProductDto productDto);

    HttpEntity<?> editProduct(Integer id, ProductDto productDto);

    HttpEntity<?> deleteProduct(Integer id);
}
