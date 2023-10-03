package uzum.uzum.service;


import lombok.RequiredArgsConstructor;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.stereotype.Service;
import uzum.uzum.entity.Product;
import uzum.uzum.full.IntProductService;
import uzum.uzum.payload.ApiResponse;
import uzum.uzum.payload.ProductDto;
import uzum.uzum.repository.CategoryRepository;
import uzum.uzum.repository.ProductRepository;

@Service
    @RequiredArgsConstructor
public class ProductService implements IntProductService {
    private final ProductRepository productRepository;
    private final CategoryRepository categoryRepository;

    @Override
    public ApiResponse addProduct(ProductDto productDto) {
        try {
            Product product = Product.builder()
                    .price(productDto.getPrice())
                    .img(productDto.getImg())
                     .description(productDto.getDescription())
                    .category(categoryRepository.findById(productDto.getCategoryId()).orElseThrow(() -> new ResourceNotFoundException("getCategory")))
                    .build();
            product.setName(productDto.getName());
            productRepository.save(product);
            return new ApiResponse("Successfully saved", true);
        } catch (Exception e) {
            return new ApiResponse("Xatolik", false);
        }
    }

    @Override
    public ApiResponse editProduct(Integer id, ProductDto productDto) {
        try {
            Product product = productRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("getProduct"));
            product.setName(productDto.getName());
            product.setPrice(productDto.getPrice());
            product.setDescription(productDto.getDescription());
            product.setImg(productDto.getImg());
            productRepository.save(product);
            return new ApiResponse("successfully edited", true);
        } catch (Exception e) {
            return new ApiResponse("error", false);
        }
    }

    @Override
    public ApiResponse deleteProduct(Integer id) {
        try {
            Product product = productRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("getProduct"));
            productRepository.delete(product);
            return new ApiResponse("successfully deleted", true);
        } catch (Exception e) {
            return new ApiResponse("This is product not found", false);
        }
    }
}
