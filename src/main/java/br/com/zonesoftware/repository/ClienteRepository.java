package br.com.zonesoftware.repository;

import br.com.zonesoftware.model.Cliente;
import java.util.Collection;
import java.util.HashMap;
import java.util.Map;
import javax.annotation.PostConstruct;
import org.springframework.stereotype.Component;

/**
 *
 * @author daniel
 */
@Component
public class ClienteRepository {

    private long clienteId;
    private Map<Long, Cliente> clientes;
    
    @PostConstruct
    public void init(){
        clientes = new HashMap<>();
    }
    
    public Cliente salvar(Cliente cliente){
        clienteId++;
        cliente.setId(clienteId);
        clientes.put(cliente.getId(), cliente);
        return cliente;
    }
    
    public Collection<Cliente> buscarTodos(){
        return clientes.values();
    }
    
    public Cliente alterar(Cliente cliente){
        return clientes.put(cliente.getId(), cliente);
    }
    
    public Cliente excluir(long id){
        return clientes.remove(id);
    }
    
}
