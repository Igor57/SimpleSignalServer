/*
** JsToJava.java 
*/
import java.applet.*; 
import java.awt.*;
import java.util.regex.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.InputEvent;
import java.awt.event.KeyEvent;
import javax.swing.*;

public class JsToJava extends Applet { 
   TextField txtField = new TextField(80);
   TextField txtFieldX = new TextField(40);
   TextField txtFieldY = new TextField(40);
   private Robot robot;
   private    int x;
   private    int y;
   public void init() {
      setLayout (new BorderLayout()); 
      Panel pi = new Panel();
      pi.add("Center", txtField);
	  pi.add("Center", txtFieldX);
	  pi.add("Center", txtFieldY);
      add("Center", pi);
	  
	  GraphicsEnvironment env = GraphicsEnvironment.getLocalGraphicsEnvironment();
	 GraphicsDevice screen=env.getDefaultScreenDevice(); // GraphicsDevice класс описывает графические устройства, которые могут быть доступны в определенной среде графики.
	 try {
	     robot=new Robot(screen);
		} catch (AWTException ex) { }
	  
   }
   public void updateField(String arg) {
  txtField.setText(arg);

String[] lines = arg.split ("%3A"); // первым делом проходит действие затем параметры


String Action = lines[0];

if (Action.equals("mouseMove")) // пришло сообщение о движении мыши
{
 	String numX = lines[1];
    String numY = lines[2];
    x = Integer.decode(numX);
	y = Integer.decode(numY);
	txtFieldX.setText(numX);
	txtFieldY.setText(numY);
   robot.mouseMove(x,y); // двигаем мышку роботом
   return;
}

if (Action.equals("onMouseDown")) // пришло сообщение о нажатии на клавишу мыши
{
	String buttonNumber = lines[1]; // какая клавиша нажата
	int btn = Integer.decode(buttonNumber);
	if (btn==0) // left
		{
		robot.mousePress(InputEvent.BUTTON1_MASK); 
		}
	if (btn==1) // middle
		{
		robot.mousePress(InputEvent.BUTTON2_MASK); 
		}
	if (btn==2) // right
		{
		robot.mousePress(InputEvent.BUTTON3_MASK); 
		}
return;
}

if (Action.equals("onMouseUp")) // пришло сообщение о освобождении клавиши мыши
{
	String buttonNumber = lines[1]; // какая клавиша нажата
	int btn = Integer.decode(buttonNumber);
	if (btn==0) // left
		{
		robot.mouseRelease(InputEvent.BUTTON1_MASK); 
		}
	if (btn==1) // middle
		{
		robot.mouseRelease(InputEvent.BUTTON2_MASK); 
		}
	if (btn==2) // right
		{
		robot.mouseRelease(InputEvent.BUTTON3_MASK); 
		}
return;
}

if (Action.equals("onWheel")) // пришло сообщение о движении колесика
{
	String direction = lines[1]; // какое направление движения
	if (direction.equals("Up")) // left
		{
		robot.mouseWheel(-1); 
		}
		else
		{
		robot.mouseWheel(1);
		}

return;
}


if (Action.equals("AltKeyCode")) // пришло сообщение о нажатии кнопки
{
int i;
	robot.keyPress(KeyEvent.VK_ALT);
	for (i=1;i<lines.length;i=i+1)
	{	
		if (lines[i].equals("1"))
		{
			robot.keyPress(KeyEvent.VK_NUMPAD1);
			robot.keyRelease(KeyEvent.VK_NUMPAD1);
		}
		if (lines[i].equals("2"))
		{
			robot.keyPress(KeyEvent.VK_NUMPAD2);
			robot.keyRelease(KeyEvent.VK_NUMPAD2);
		}
		if (lines[i].equals("3"))
		{
			robot.keyPress(KeyEvent.VK_NUMPAD3);
			robot.keyRelease(KeyEvent.VK_NUMPAD3);
		}
		if (lines[i].equals("4"))
		{
			robot.keyPress(KeyEvent.VK_NUMPAD4);
			robot.keyRelease(KeyEvent.VK_NUMPAD4);
		}
		if (lines[i].equals("5"))
		{
			robot.keyPress(KeyEvent.VK_NUMPAD5);
			robot.keyRelease(KeyEvent.VK_NUMPAD5);
		}
		if (lines[i].equals("6"))
		{
			robot.keyPress(KeyEvent.VK_NUMPAD6);
			robot.keyRelease(KeyEvent.VK_NUMPAD6);
		}
		if (lines[i].equals("7"))
		{
			robot.keyPress(KeyEvent.VK_NUMPAD7);
			robot.keyRelease(KeyEvent.VK_NUMPAD7);
		}
		if (lines[i].equals("8"))
		{
			robot.keyPress(KeyEvent.VK_NUMPAD8);
			robot.keyRelease(KeyEvent.VK_NUMPAD8);
		}
		if (lines[i].equals("9"))
		{
			robot.keyPress(KeyEvent.VK_NUMPAD9);
			robot.keyRelease(KeyEvent.VK_NUMPAD9);
		}
		if (lines[i].equals("0"))
		{
			robot.keyPress(KeyEvent.VK_NUMPAD0);
			robot.keyRelease(KeyEvent.VK_NUMPAD0);
		}
	}
	robot.keyRelease(KeyEvent.VK_ALT);
return;
}

if (Action.equals("KeyCode")) // пришло сообщение о нажатии кнопки
{
	String buttonNumber = lines[1]; // какая клавиша нажата
	int btn = Integer.decode(buttonNumber);
	robot.keyPress(btn);
	robot.keyRelease(btn);
return;
}
   
   }
}