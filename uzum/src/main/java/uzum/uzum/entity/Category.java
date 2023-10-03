package uzum.uzum.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import uzum.uzum.entity.template.AbsNameEntity;

import javax.persistence.Entity;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class Category extends AbsNameEntity {
}
