package uzum.uzum.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import uzum.uzum.entity.SaveProduct;


@CrossOrigin
public interface SaveProductRepository extends JpaRepository<SaveProduct, Integer> {

}
