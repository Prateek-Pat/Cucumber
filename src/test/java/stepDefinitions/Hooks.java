package stepDefinitions;

import io.cucumber.java.After;
import io.cucumber.java.Before;

public class Hooks {
	
	@Before("@WebTest")
	public void WebBrowserOpen()
	{
		System.out.println("Pre requsite Before WebBrowserOpen case");
	}
	
	@After("@WebTest")
	public void WebBrowserClosed()
	{
		System.out.println("Pre requsites After WebBrowserClosed case");
	}
	
	@Before("@MobileTest")
	public void MwebBrowserOpen1()
	{
		System.out.println("Pre requsites Before MwebBrowserOpen case ");
	}
	@After("@MobileTest")
	public void MwebBrowserClose()
	{
		System.out.println("Pre requsites After MwebBrowserClose case ");
	}
}
