/**Instalação==========================================
 * 
 * npm init 
 * Cria um package.json com dependencias
 * 
 * npm -v
 * Verifica a versão e se o node está instalado
 * 
 * 
 * 
 * 
 * Novos módulos=====================================
 * 
 * npm install nomeDoMódulo
 * Instala localmente o módulo
 * 
 * npm install -g nomeDoMódulo
 * Instala para o computador todo, não recomendável em alguns casos.
 * 
 * npm install nomeDoMódulo --save-dev
 * Dessa maneira é uma dependencia que é de desenvolvedor, não necessária subir pro git
 * 
 * ==================== node_modules/ jamais deve subir =================
 * 
 * 
 * Oque é? ===============================
 * 
 * package.json
 * Esse arquivo SEMPRE deve subir, é nesse onde suas dependencias e oque é necessário para instalação do projeto
 * em outros computadores. Somente com o package.json outro usuário consegue executar seu projeto
 * 
 * package-lock.json
 * é uma forma de garantir que todos os desenvolvedores trabalhem com a mesma versão das dependências do projeto, 
 * garantindo uma experiência de desenvolvimento mais consistente e previsível.
 */