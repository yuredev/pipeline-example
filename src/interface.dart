import 'dart:io';

void main() async {
  print('Insira o caminho do arquivo: ');
  final filePath = stdin.readLineSync();
  print('Insira a letra desejada: ');
  final desiredLetter = stdin.readLineSync();
  await Process.run('node', ['selection.js', '$filePath', '$desiredLetter']);
  await Process.run('python3', ['sorting.py']);
  await Process.run('node', ['pdf-generation.js']);
} 
