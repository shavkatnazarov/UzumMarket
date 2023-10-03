package uzum.uzum.projection;

import org.springframework.data.rest.core.config.Projection;
import uzum.uzum.entity.Category;

@Projection(name = "customCategory", types = Category.class)
public interface CustomCategory {
    Integer getId();

    String getName();
}
