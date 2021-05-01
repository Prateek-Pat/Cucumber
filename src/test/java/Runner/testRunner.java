package Runner;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions( 
				features ="src/test/java/feature",
				glue={"stepDefinitions"},strict = true, monochrome = true,
				tags= {"@MobileTest or @RegTest"}
//			plugin = {"pretty", "html:target/cucumber","json:target/cucumber.json"}
				)
public class testRunner {

}
 