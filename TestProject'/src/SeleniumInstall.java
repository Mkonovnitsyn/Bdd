

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class SeleniumInstall {

	public static void main(String[] args) throws InterruptedException {
		
		

		System.setProperty("webdriver.chrome.driver", "./drivers/chromeDriver/chromedriver.exe");
		WebDriver driver = new ChromeDriver();

		driver.get("https://tidalwavecarwash.qa.sonnyscontrols.com/login");
		driver.manage().window().maximize();
		driver.findElement(By.id("details-button")).click();
		driver.findElement(By.id("proceed-link")).click();

		driver.findElement(By.id("login-username")).sendKeys("support");
		driver.findElement(By.id("login-password")).sendKeys("l2w0OoJCmjwS@0jT");
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		driver.findElement(By.xpath("//button[@type='submit']")).click();
		driver.findElement(By.xpath("//*[@id=\"btn-mobile-menu-toggle\"]/i[1]")).click();

		Thread.sleep(5000);

		driver.close();
		driver.quit();

	}

}
