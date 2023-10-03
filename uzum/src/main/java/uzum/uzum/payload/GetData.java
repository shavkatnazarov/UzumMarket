package uzum.uzum.payload;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import uzum.uzum.entity.User;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class GetData {
    private User user;
    private ResToken resToken;
}
