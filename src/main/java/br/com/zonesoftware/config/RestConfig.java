package br.com.zonesoftware.config;

import br.com.zonesoftware.model.Cliente;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurerAdapter;

/**
 *
 * @author daniel
 */

@Configuration
public class RestConfig extends RepositoryRestConfigurerAdapter{
    
    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {
        config.exposeIdsFor(Cliente.class);
    }
    
}
