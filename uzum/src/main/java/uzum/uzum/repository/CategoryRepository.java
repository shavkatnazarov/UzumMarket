package uzum.uzum.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;
import uzum.uzum.entity.Category;
import uzum.uzum.projection.CustomCategory;

@CrossOrigin
@RepositoryRestResource(collectionResourceRel = "list", path = "category", excerptProjection = CustomCategory.class)
public interface CategoryRepository extends JpaRepository<Category, Integer> {
}
