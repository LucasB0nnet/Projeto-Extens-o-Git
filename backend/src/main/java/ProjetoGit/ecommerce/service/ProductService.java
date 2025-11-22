package ProjetoGit.ecommerce.service;

import ProjetoGit.ecommerce.entity.Product;
import ProjetoGit.ecommerce.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;
    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }
    public List<Product> findAll() {
        return productRepository.findAll();
    }

    public Product findById(long id) {
        Product product = productRepository.findById(id).orElse(null);
        return product;
    }

    public void create(Product product) {
        productRepository.save(product);
    }

    public void update(Product product) {
        Product entity = productRepository.findById(product.getId()).orElse(null);
        entity.setName(product.getName());
        entity.setDescription(product.getDescription());
        entity.setCategory(product.getCategory());
        entity.setPrice(product.getPrice());
        productRepository.save(entity);
    }

    public void delete(Product product) {
        Product entity = productRepository.findById(product.getId()).orElse(null);
        productRepository.delete(entity);
    }


}
