import 'dart:io';

void main() async {
  print('Insira o caminho do arquivo: ');
  final filePath = stdin.readLineSync();
  print('Insira a letra desejada: ');
  final desiredLetter = stdin.readLineSync();

  final result = await Process.run('node', ['selection.js', '$filePath', '$desiredLetter']);
  print(result.stdout);
}
