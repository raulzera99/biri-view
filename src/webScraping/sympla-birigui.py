import requests
from bs4 import BeautifulSoup
import json

url = "https://www.sympla.com.br/eventos/birigui-sp"

# Fazendo a requisição HTTP para a página
print("Acessando a página de eventos...")
response = requests.get(url)
if response.status_code == 200:
    print("Página acessada com sucesso.")
    page_content = response.content

    # Parseando o conteúdo HTML com BeautifulSoup
    soup = BeautifulSoup(page_content, 'html.parser')
    print("Conteúdo da página analisado com BeautifulSoup.")

    # Lista para armazenar os eventos
    events = []

    # Buscando os contêineres dos eventos
    event_containers = soup.find_all("a", class_="EventCardstyle__CardLink-sc-1rkzctc-3")  # Seleciona os links dos eventos
    print(f"{len(event_containers)} eventos encontrados na página.")

    for i, container in enumerate(event_containers, start=1):
        try:
            # Extraindo a URL do evento
            url = container['href']
            
            # Extraindo o nome do evento
            name = container.find("h3", class_="EventCardstyle__EventTitle-sc-1rkzctc-7").get_text(strip=True)
            
            # Extraindo a data do evento
            date = container.find("div", class_="sc-1sp59be-1").get_text(strip=True)
            
            # Extraindo a localização do evento
            location = container.find("div", class_="EventCardstyle__EventLocation-sc-1rkzctc-8").get_text(strip=True)
            
            events.append({
                "url": url,
                "name": name,
                "date": date,
                "location": location
            })

            # Exibindo detalhes do evento atual
            print(f"\nEvento {i}:")
            print(f"URL: {url}")
            print(f"Nome: {name}")
            print(f"Data: {date}")
            print(f"Local: {location}")
        except AttributeError:
            print(f"\nEvento {i} está incompleto e foi ignorado.")
            continue

    # Salvando os eventos em um arquivo JSON
    with open("eventos.json", "w", encoding="utf-8") as file:
        json.dump(events, file, ensure_ascii=False, indent=4)
    print("\nTodos os eventos foram salvos no arquivo 'eventos.json'.")
else:
    print("Erro ao acessar a página. Verifique a URL ou sua conexão com a internet.")
