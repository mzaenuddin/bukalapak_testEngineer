
package package1;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.firefox.firefoxDriver;

public class addToCartBukalapak{
    public static void main(string[] args)
    {
        WebDriver driver = new firefoxFriver();
        driver.get("https//bukalapak.com");
        //assume has login
        driver.manager().window().maximize();
        driver.findElement(By.xpath("[@id="vm__white-header-dweb"]/section/header/div[3]/div/div/div[1]/div/span[2]/div/div[1]/a")).click();
        driver.findElement(By.xpath("/html/body/div[2]/fragment-loader/div/div/section[4]/div/div[2]/div[1]/div/div[1]/div/div/div[1]/figure/div/div[1]/a")).click();
        driver.findElement(By.xpath("//*[@id="section-main-product"]/div[2]/div[5]/div/button[2]")).click();
    }
}


