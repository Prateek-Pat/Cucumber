package stepDefinitions;

import java.util.List;

import io.cucumber.datatable.DataTable;
import io.cucumber.java.PendingException;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class stepDef {
	
	@Given("User is opening browser")
	public void user_is_opening_browser() {
	    System.out.println("pre-requsite given");
	}

	@When("User entered url in browser")
	public void user_entered_url_in_browser() {
	    System.out.println("pre-requsite when");
	}

	@Then("User is landed on website home page")
	public void user_is_landed_on_website_home_page() {
	    System.out.println("pre-requsite Then");
	}
	
	@Given("User is on login screen")
	public void user_is_on_login_screen() {
	    System.out.println("Login Screen");
	}

	@When("User enters username Max and Password Payne")
	public void user_enters_username_Max_and_Password_Payne() {
	    System.out.println("Max Payne");
	}

	@Then("User redirected to app dashboard")
	public void user_redirected_to_app_dashboard() {
	    System.out.println("App Dashboard");
	}

	@When("User enters username {string} and password {string}")
	public void user_enters_username_and_password(String string, String string2) {
	    System.out.println(string + string2);
	}

	@When("^User enters following details$")
    public void user_enters_following_details(DataTable data) throws Throwable {
		List<List<String>> obj = data.asLists();
		System.out.println(obj.get(0).get(0));
		System.out.println(obj.get(0).get(1));
		System.out.println(obj.get(0).get(2));
		System.out.println(obj.get(0).get(3));
    }

	 @When("^User username (.+) and password (.+) and address (.+)$")
	    public void user_username_and_password_and_address(String name, String passwd, String addr) {
	       System.out.println( name + passwd + addr);
	    }
}



	
	
