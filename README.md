# Estructuras de datos en JavaScript

La estructuras de datos sirven para guardar información. En JS casi todo es un objecto (entidad abstracta que representa cualquier cosa) a excepción de los tipos primitivos: string, number, bigint, boolean, undefined y symbol. Con los objectos, _los valores se pasan por referencia_, esto quiere decir que si se modifica el objecto original o su copia esto afectará los valores de ambos. Diferente es el comportamiento de los primitivos que solo se pasa el valor y no su referencia.

## Class

Son un "molde" para crear objetos.

- **Constructor**: método que se invoca al momento de crear un objecto
- **Super**: palabra clave para invocar al constructor de la clase padre
- **Herencia**: en la programación POO es cuando se heredan propiedades y métodos de otras clases, para expandir y reutilizar funcionalidades
