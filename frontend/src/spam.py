# importando pyautogui
import pyautogui as pg, webbrowser as web, time as tm  
# importando colorama para los colores de la consola
from colorama import init, Back, Fore

# inicialización de colorama
init()

# ingresar el numero de celular
numberVictim = input(Fore.GREEN + "Ingresa el numero de la persona: ")

# ingresar el mensaje
messageVictimInput = input(Fore.BLUE + "Ingresa el mensaje a enviar: ")

# cuantas veces se enviará
counts = input(Fore.RED + "Ingresa las veces que se enviará el mensaje: ")

# open a web browser
web.open("https://web.whatsapp.com/send?phone=+521" + numberVictim)

# enviando mensajes...
for i in range(int(counts)):
    pg.write(messageVictimInput)
    pg.press('enter')