package uzum.uzum.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import uzum.uzum.service.AttachmentService;

import java.util.UUID;

@RestController
@CrossOrigin
@RequiredArgsConstructor
@RequestMapping("/api/v1/attachment")
public class AttachmentController {

    private final AttachmentService attachmentService;

    @PostMapping("/upload")
    @ResponseBody
    public UUID uploadFile(MultipartHttpServletRequest request) {
        return attachmentService.upload(request);
    }

    @GetMapping("/download")
    public HttpEntity<?> getFile(@RequestParam(name = "id", required = false) UUID id) {
        return attachmentService.getFileJon(id);
    }
}
