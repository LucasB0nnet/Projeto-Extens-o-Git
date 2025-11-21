package ProjetoGit.ecommerce.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import ProjetoGit.ecommerce.entity.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {

}
