using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")] //[Route("api/[controller]")]: Isso indica que a rota para este controlador é construída com base no nome do controlador, substituindo [controller] pelo nome real do controlador sem o sufixo "Controller".
public class DadosController : ControllerBase
{
    [HttpGet]
    public IActionResult ObterDados()
    {
        // Lógica para obter os dados, substitua isso com a sua lógica real
        var dados = new { mensagem = "Olá do ASP.NET MVC" };

        return Ok(dados);
    }
}
