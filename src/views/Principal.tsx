function Principal() {
  return (
    <section className="lg:py-8 pb-8 pt-16 px-10 lg:px-24 h-full w-full text-[#fffffe]">
        <h1 className="text-2xl font-bold mb-6 font-title">
            De qué trata la página
        </h1>
        <p className="text-[#94a1b2] lg:max-w-2xl font-paragraph tracking-wider mb-6">
            <span className="pl-6"/>Es una pagina desarrollada con el propósito de mostrar
            y controlar tus transacciones de una manera sencilla y fácil.
            A continuación, esta página se divide en dos secciones:
        </p>
        <article className="pl-4">
          <ul className="list-disc list-outside flex flex-col mb-6 gap-6">
            <li>
                <h2 className="text-xl font-bold font-title mb-4">
                    Gráficas
                </h2>
                <p className="text-[#94a1b2] lg:max-w-lg font-paragraph tracking-wider">
                    <span className="pl-6"/>Aquí se muestran las gráficas de los datos de la página. 
                    Cada gráfica tiene un botón de acción que permite realizar una acción sobre la gráfica.
                </p>
            </li>

            <li>
                <h2 className="text-2xl font-bold font-title mb-4">
                    Tabla de transacciones
                </h2>
                <p className="text-[#94a1b2] lg:max-w-lg font-paragraph tracking-wider">
                    <span className="pl-6"/>Aquí se muestran las transacciones realizadas en la página.
                    Puedes realizar varias acciones en esta seccion, como añadir nuevas transacciones, 
                    eliminar transacciones o editar las transacciones existentes.
                </p>
            </li>
          </ul>
        </article>
          <h1 className="text-2xl font-bold mb-6 font-title">
            Cómo añadir una nueva transacción
            </h1>
            <p className="text-[#94a1b2] lg:max-w-2xl font-paragraph tracking-wider mb-6">
                <span className="pl-6"/>En la sección de transacciones, puedes añadir nuevas transacciones.
                Para hacerlo, debes seleccionar la opción de añadir nueva transacción en la barra de navegación.
                Luego, debes completar los campos requeridos para crear la transacción. 
                <br /> <br />
                Los campos requeridos son; Titulo de la transacción, Monto de la transacción y la 
                categoría de la transacción. Las categorías cambian dependiendo de que 
                tipo de transacción querra añadir
            </p>
    </section>
  )
}

export default Principal