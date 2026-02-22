using {com.demo.capfirst.db as demobd} from '../db/schema';

service DemoService {
    entity Products as projection on demobd.Products;
}
