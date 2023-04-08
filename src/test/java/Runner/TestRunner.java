package Runner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "/Users/binjalraval/IdeaProjects/BDD/src/test/resources/Features/registration.feature",
        glue = {"StepDefination"},
        format = {"pretty","html:htmlReport","json:json/cucumber.json","junit:junit/cucumber.xml"}
)
public class TestRunner {

}
