package uzum.uzum.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import uzum.uzum.entity.Role;

@CrossOrigin
public interface RoleRepository extends JpaRepository<Role, Integer> {

}
