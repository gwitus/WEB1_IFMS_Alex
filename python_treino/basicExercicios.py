#-----------------------------------------Cabeçalho-------------------------------------------#
from ast import While


url =  'https://wiki.python.org.br/ListaDeExercicios'
print("\nNesse arquivo contém atividades em python realizadas com base no site: " + url)

#-----------------------------Menusinho em python------------------------------#
coringa = 0;

while coringa <= 15:
    exercicioEscolhido = input("\nInsira qual exercício gostaria de ver funcionando:")

    if (exercicioEscolhido == 1):
        #Exercício 1
        print("Hello world")
    if(exercicioEscolhido == 2):
        #Exercicio 2
        number = input("\nInsira um número: ")
        print("\nO número inserido foi: " + number)
    
    coringa += 1


#teste 2
