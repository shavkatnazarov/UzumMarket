package uzum.uzum.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import uzum.uzum.entity.Product;

import java.util.List;

@CrossOrigin
public interface ProductRepository extends JpaRepository<Product, Integer> {
    List<Product> findByCategoryId(Integer category_id);
}
