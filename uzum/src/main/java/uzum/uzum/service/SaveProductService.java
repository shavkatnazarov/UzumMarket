package uzum.uzum.service;


import lombok.RequiredArgsConstructor;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.stereotype.Service;
import uzum.uzum.entity.Product;
import uzum.uzum.entity.SaveProduct;
import uzum.uzum.entity.User;
import uzum.uzum.payload.ApiResponse;
import uzum.uzum.repository.AuthRepository;
import uzum.uzum.repository.ProductRepository;
import uzum.uzum.repository.SaveProductRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class SaveProductService {
    private final SaveProductRepository saveProductRepository;
    private final AuthRepository authRepository;
    private final ProductRepository productRepository;

    public ApiResponse saveProduct(UUID userId, Integer id) {
        try {
            User user = authRepository.findById(userId).orElseThrow(() -> new ResourceNotFoundException("getUser"));
            Product getProduct = productRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("getProduct"));
            if (user.getSaveProduct() == null) {
                SaveProduct saveProduct = new SaveProduct();
                saveProductRepository.save(saveProduct);
                saveProduct.getProducts().add(getProduct);
                user.setSaveProduct(saveProduct);
                authRepository.save(user);
                return new ApiResponse("Mahsulot savatga saqlandi", true);
            }
            SaveProduct saveProduct = user.getSaveProduct();
            List<Product> products = new ArrayList<>(saveProduct.getProducts());
            products.add(getProduct);
            saveProduct.setProducts(products);
            saveProductRepository.save(saveProduct);
            authRepository.save(user);
            return new ApiResponse("Mahsulot savatga saqlandi", true);
        } catch (Exception e) {
            return new ApiResponse("Mahsulot savatga saqlashda hatolik", false);
        }
    }

    public ApiResponse deleteProduct(UUID userId, Integer Id) {
        User user = authRepository.findById(userId).orElseThrow(() -> new ResourceNotFoundException("getUser"));
        for (Product product : user.getSaveProduct().getProducts()) {
            if (product.getId().equals(Id)) {
                user.getSaveProduct().getProducts().remove(product);
                return new ApiResponse("Mahsulot O'chirildi", true);
            }
        }
        return new ApiResponse("Mahsulot ochirilmadi", false);
    }
}
