import time
from Client import Client
from ClientRequests import *

MY_IP_ADDRESS = '10.0.0.12'

C1 = Client()
C1.name = "Test 1"

C2 = Client()
C2.name = "Test 2"


def RegisterClient(client):
    r = RegisterWithServer(client, MY_IP_ADDRESS)
    r.start()
    r.join()


def DeRegisterClient(client):
    d = DeRegisterFromServer(client)
    d.start()
    d.join()


def PublishFiles(client, files):
    p = PublishFilesToServer(client, files)
    p.start()
    p.join()


def RemoveFiles(client, files):
    r = RemoveFilesFromServer(client, files)
    r.start()
    r.join()


def RetrieveAllClients(client):
    j = RetrieveAllClientsFromServer(client)
    j.start()
    j.join()


def RetrieveClient(client, client_name):
    r = RetrieveClientInfoFromServer(client, client_name)
    r.start()
    r.join()


def SearchFile(client, file_name):
    s = SearchFileFromServer(client, file_name)
    s.start()
    s.join()


def DownloadFile(client, file_name, peer_ip_address, peer_tcp_socket):
    d = DownloadFileFromPeer(
        client, file_name, peer_ip_address, peer_tcp_socket)
    d.start()
    d.join()


if __name__ == "__main__":
    C1.start()
    C2.start()

    RegisterClient(C1)
    RegisterClient(C2)

    PublishFiles(C1, C1.list_of_available_files)
    PublishFiles(C2, C1.list_of_available_files)

    RemoveFiles(C1, ["Test.txt", "Test4.txt"])

    DownloadFile(C1, "Test5.txt", C2.ip_address,
                 int(C2.tcp_socket.getsockname()[1]))

    RetrieveAllClients(C1)
    RetrieveAllClients(C2)

    time.sleep(1)

    PublishFiles(C2, ["Hellooooo update"])

    SearchFile(C2, "Hellooooo update")
    SearchFile(C2, "Test2.txt")

    time.sleep(1)

    RetrieveClient(C1, "Test 1")

    time.sleep(1)

    DeRegisterClient(C1)
    DeRegisterClient(C2)
