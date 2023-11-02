package uzum.uzum.controller;


import lombok.RequiredArgsConstructor;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import uzum.uzum.entity.User;
import uzum.uzum.payload.ApiResponse;
import uzum.uzum.repository.AuthRepository;
import uzum.uzum.service.SaveProductService;

import java.util.UUID;

@RestController
@RequestMapping("/api/v1/basket")
@RequiredArgsConstructor
public class SaveProductController {
    private final SaveProductService service;
    private final AuthRepository authRepository;

    @PostMapping
    public HttpEntity<?> save(@RequestParam UUID id, @RequestParam Integer IdI) {
        try {
            ApiResponse apiResponse = service.saveProduct(id, IdI);
            return ResponseEntity.status(apiResponse.isSuccess() ? 200 : 409).body(apiResponse);
        } catch (Exception e) {
            return null;
        }
    }

    @DeleteMapping("/{id}")
    public HttpEntity<?> delete(@PathVariable UUID id, @RequestParam Integer IdI) {
        ApiResponse apiResponse = service.deleteProduct(id, IdI);
        return ResponseEntity.status(apiResponse.isSuccess() ? 200 : 409).body(apiResponse);
    }

    @GetMapping
    public HttpEntity<?> get(@RequestParam UUID id) {
        User user = authRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("getUser"));
        return ResponseEntity.ok(user.getSaveProduct().getProducts());
    }
}

