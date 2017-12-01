# Principios-Ionic2
Visão geral sobre os princípios de Ionic 2.
Para entender o funcionamento de cada, rodar a aplicação e verificar a execução de cada princípios pela ferramenta de desenvolvedor do navegador (F12).

- Módulos - @NgModule (angular 2): 
Tendo por exemplo o módulo AppModule (em app.module.ts), criado assim que criarmos um projeto, que possui alguns metadados específicos pra ele: 'declarations' para declarar components, pipes e diretivas que tiver na aplicaão; no 'entryComponents' para declarar apenas as páginas da aplicação; 'imports' serve para importar outros módulos que o módulo precise; 'bootstrap' é o component que vai startar a aplicação; 'providers' que é responsável por registrar os serviços que vão estar disponíveis na aplicação; e o 'exports' que e vai tornar público components, pipes e directivas que você precisa que outros módulos enxerguem.

- Navegação no Ionic (push, pop, setRoot): é baseado na estrutura de dados de tipo pilha, onde o último a entrar na pilha é o primeiro a sair. Para navegar sem precisar empilhar, utiliza-se o setRoot. Para exemplificar o funcionamento, na página Home do projeto há botões exemplificando o uso de push e setRoot.

- Passagem de parâmetro: exemplificado no arquivo home.ts nos métodos pushPage() e setRoot().

- Lifecycle Events: são os eventos de ciclo de vida das páginas e são disparados nas etapas de navegação. Tendo o 'ionViewCanEnter()', o 'ionViewDidLoad()', o 'ionViewWillEnter()', o 'ionViewDidEnter()', o 'ionViewCanLeave()', o 'ionViewWillLeave()', 'ionViewDidLeave()', e o 'ionViewWillUnload()' exemplificados no arquivo lifecycles-events.ts
