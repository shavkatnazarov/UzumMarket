package uzum.uzum.entity;

import lombok.*;
import uzum.uzum.entity.template.AbsNameEntity;

import javax.persistence.*;
import java.util.UUID;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
public class Product extends AbsNameEntity {
    @Column(nullable = false, name = "product_price")
    private Double price;

    @Column(name = "product_img")
    private UUID img;
    @ManyToOne(optional = false)
    private Category category;

    @Column(name = "product_description", length = 99999)
    private String description;

//    @ManyToOne(optional = false)
//    private Order order;
}
