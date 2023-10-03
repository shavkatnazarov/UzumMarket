package uzum.uzum.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import uzum.uzum.entity.Attachment;

import java.util.UUID;

@CrossOrigin
public interface AttachmentRepository extends JpaRepository<Attachment, UUID> {
}
