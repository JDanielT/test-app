package br.com.zonesoftware.repository;

import br.com.zonesoftware.model.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author daniel
 */
@Repository
public interface ClienteRepository extends JpaRepository<Cliente, Long>{
}
