import * as os from 'os';
import * as assert from 'assert';
import * as path from 'path';
import * as vscode from 'vscode';
import { formatInstance } from '../providers/ModuleInstantiator';

const testFolderLocation = '../../src/test';

suite('ModuleInstantiator Tests', () => {
    test('test #1: formatInstance without parameters', async () => {
        let uri = vscode.Uri.file(path.join(__dirname, testFolderLocation, 'test-files', 'ModuleInstantiator.test.1.v')); // prettier-ignore
        let document = await vscode.workspace.openTextDocument(uri);

        // Range of the module in the document
        let fullRange = null;
        fullRange = new vscode.Range(new vscode.Position(21, 6), new vscode.Position(54, 0));

        const container = document.getText(fullRange).replace(/^\s+|\s+$/g, '');
        uri = vscode.Uri.file(path.join(__dirname, testFolderLocation, 'test-files', 'ModuleInstantiator.test.2.v'));
        document = await vscode.workspace.openTextDocument(uri);
        fullRange = new vscode.Range(new vscode.Position(3, 0), new vscode.Position(15, 0));

        let instance = document.getText(fullRange).trim();
        // Replace multiple space with a single space
        instance = instance.replace(/ +/g, ' ');

        let actualInstance;

        try {
            actualInstance = formatInstance('adder', container).trim();
        } catch (error) {
            assert.fail(`formatInstance produced an error: ${error}`);
        }

        // Replace multiple space with a single space
        actualInstance = actualInstance.replace(/ +/g, ' ');
        if (os.platform() === 'win32') {
            actualInstance = actualInstance.replace(/\n/g, '\r\n');
            actualInstance = actualInstance.replace(/\r\r/g, '\r');
        }

        assert.strictEqual(actualInstance, instance);
    });

    test('test #2: formatInstance with parameters', async () => {
        let uri = vscode.Uri.file(path.join(__dirname, testFolderLocation, 'test-files', 'ModuleInstantiator.test.1.v')); // prettier-ignore
        let document = await vscode.workspace.openTextDocument(uri);

        let fullRange = null;
        // Range of the module in the document
        fullRange = new vscode.Range(new vscode.Position(59, 6), new vscode.Position(94, 0));

        let container = document.getText(fullRange).replace(/^\s+|\s+$/g, '');
        // Replace multiple space with a single space
        container = container.replace(/ +/g, ' ');

        uri = vscode.Uri.file(path.join(__dirname, testFolderLocation, 'test-files', 'ModuleInstantiator.test.2.v'));
        document = await vscode.workspace.openTextDocument(uri);

        fullRange = new vscode.Range(new vscode.Position(22, 0), new vscode.Position(37, 0));

        let instance = document.getText(fullRange).trim();
        // Replace multiple space with a single space
        instance = instance.replace(/ +/g, ' ');

        let actualInstance;

        try {
            actualInstance = formatInstance('bar', container).trim();
        } catch (error) {
            assert.fail(`formatInstance produced an error: ${error}`);
        }

        // Replace multiple space with a single space
        actualInstance = actualInstance.replace(/ +/g, ' ');
        if (os.platform() === 'win32') {
            actualInstance = actualInstance.replace(/\n/g, '\r\n');
            actualInstance = actualInstance.replace(/\r\r/g, '\r');
        }

        assert.strictEqual(actualInstance, instance);
    });

    test('test #3: formatInstance without parameters, ports in header', async () => {
        let uri = vscode.Uri.file(path.join(__dirname, testFolderLocation, 'test-files', 'ModuleInstantiator.test.1.v')); // prettier-ignore
        let document = await vscode.workspace.openTextDocument(uri);

        let fullRange = null;
        // Range of the module in the document
        fullRange = new vscode.Range(new vscode.Position(99, 6), new vscode.Position(131, 0));

        let container = document.getText(fullRange).replace(/^\s+|\s+$/g, '');
        // Replace multiple space with a single space
        container = container.replace(/ +/g, ' ');

        uri = vscode.Uri.file(path.join(__dirname, testFolderLocation, 'test-files', 'ModuleInstantiator.test.2.v'));
        document = await vscode.workspace.openTextDocument(uri);

        fullRange = new vscode.Range(new vscode.Position(41, 0), new vscode.Position(50, 0));

        let instance = document.getText(fullRange).trim();
        // Replace multiple space with a single space
        instance = instance.replace(/ +/g, ' ');

        let actualInstance;

        try {
            actualInstance = formatInstance('akker', container).trim();
        } catch (error) {
            assert.fail(`formatInstance produced an error: ${error}`);
        }

        // Replace multiple space with a single space
        actualInstance = actualInstance.replace(/ +/g, ' ');
        if (os.platform() === 'win32') {
            actualInstance = actualInstance.replace(/\n/g, '\r\n');
            actualInstance = actualInstance.replace(/\r\r/g, '\r');
        }

        assert.strictEqual(actualInstance, instance);
    });

    test('test #4: formatInstance with parameters, ports in header', async () => {
        let uri = vscode.Uri.file(path.join(__dirname, testFolderLocation, 'test-files', 'ModuleInstantiator.test.1.v')); // prettier-ignore
        let document = await vscode.workspace.openTextDocument(uri);

        let fullRange = null;
        // Range of the module in the document
        fullRange = new vscode.Range(new vscode.Position(136, 6), new vscode.Position(171, 0));

        let container = document.getText(fullRange).replace(/^\s+|\s+$/g, '');
        // Replace multiple space with a single space
        container = container.replace(/ +/g, ' ');

        uri = vscode.Uri.file(path.join(__dirname, testFolderLocation, 'test-files', 'ModuleInstantiator.test.2.v'));
        document = await vscode.workspace.openTextDocument(uri);

        fullRange = new vscode.Range(new vscode.Position(54, 0), new vscode.Position(66, 0));

        let instance = document.getText(fullRange).trim();
        // Replace multiple space with a single space
        instance = instance.replace(/ +/g, ' ');

        let actualInstance;

        try {
            actualInstance = formatInstance('accer', container).trim();
        } catch (error) {
            assert.fail(`formatInstance produced an error: ${error}`);
        }

        // Replace multiple white spaces with a single space
        actualInstance = actualInstance.replace(/ +/g, ' ');
        if (os.platform() === 'win32') {
            actualInstance = actualInstance.replace(/\n/g, '\r\n');
            actualInstance = actualInstance.replace(/\r\r/g, '\r');
        }

        assert.strictEqual(actualInstance, instance);
    });

    test('test #5: formatInstance with defaulted parameters.', async () => {
        let uri = vscode.Uri.file(path.join(__dirname, testFolderLocation, 'test-files', 'ModuleInstantiator.test.1.v')); // prettier-ignore
        let document = await vscode.workspace.openTextDocument(uri);

        let fullRange = null;
        // Range of the module in the document
        fullRange = new vscode.Range(new vscode.Position(176, 6), new vscode.Position(195, 0));

        let container = document.getText(fullRange).replace(/^\s+|\s+$/g, '');
        // Replace multiple space with a single space
        container = container.replace(/ +/g, ' ');

        uri = vscode.Uri.file(path.join(__dirname, testFolderLocation, 'test-files', 'ModuleInstantiator.test.2.v'));
        document = await vscode.workspace.openTextDocument(uri);

        fullRange = new vscode.Range(new vscode.Position(70, 0), new vscode.Position(82, 0));

        let instance = document.getText(fullRange).trim();
        // Replace multiple space with a single space
        instance = instance.replace(/ +/g, ' ');

        let actualInstance;

        try {
            actualInstance = formatInstance('anner', container).trim();
        } catch (error) {
            assert.fail(`formatInstance produced an error: ${error}`);
        }

        // Replace multiple white spaces with a single space
        actualInstance = actualInstance.replace(/ +/g, ' ');
        if (os.platform() === 'win32') {
            actualInstance = actualInstance.replace(/\n/g, '\r\n');
            actualInstance = actualInstance.replace(/\r\r/g, '\r');
        }

        assert.strictEqual(actualInstance, instance);
    });

    test('test #6: empty and undefined container/symbol scenarios', async () => {
        let actualInstance;

        // Empty container with valid symbol
        try {
            actualInstance = formatInstance('bar', '');
            assert.strictEqual(actualInstance, undefined);
        } catch (error) {
            assert.fail(`formatInstance produced an error: ${error}`);
        }

        // Undefined container with valid symbol
        try {
            actualInstance = formatInstance('bar', undefined);
            assert.strictEqual(actualInstance, undefined);
        } catch (error) {
            assert.fail(`formatInstance produced an error: ${error}`);
        }

        const uri = vscode.Uri.file(path.join(__dirname, testFolderLocation, 'test-files', 'ModuleInstantiator.test.1.v')); // prettier-ignore
        const document = await vscode.workspace.openTextDocument(uri);

        // Range of the module in the document
        const fullRange = new vscode.Range(document.positionAt(1293), document.positionAt(1899));

        let container = document.getText(fullRange).replace(/^\s+|\s+$/g, '');
        // Replace multiple space with a single space
        container = container.replace(/ +/g, ' ');

        // Empty symbol with valid container
        try {
            actualInstance = formatInstance('', container);
            assert.strictEqual(actualInstance, undefined);
        } catch (error) {
            assert.fail(`formatInstance produced an error: ${error}`);
        }

        // Undefined symbol with valid container
        try {
            actualInstance = formatInstance(undefined, container);
            assert.strictEqual(actualInstance, undefined);
        } catch (error) {
            assert.fail(`formatInstance produced an error: ${error}`);
        }

        // Empty symbol and container
        try {
            actualInstance = formatInstance('', '');
            assert.strictEqual(actualInstance, undefined);
        } catch (error) {
            assert.fail(`formatInstance produced an error: ${error}`);
        }

        // Undefined symbol and container
        try {
            actualInstance = formatInstance(undefined, undefined);
            assert.strictEqual(actualInstance, undefined);
        } catch (error) {
            assert.fail(`formatInstance produced an error: ${error}`);
        }

        // Valid symbol and null container
        try {
            actualInstance = formatInstance('bar', null);
            assert.strictEqual(actualInstance, undefined);
        } catch (error) {
            assert.fail(`formatInstance produced an error: ${error}`);
        }

        // Null symbol and container
        try {
            actualInstance = formatInstance(null, null);
            assert.strictEqual(actualInstance, undefined);
        } catch (error) {
            assert.fail(`formatInstance produced an error: ${error}`);
        }
    });

    test('test #7: formatInstance golden output.', async () => {
        let uri = vscode.Uri.file(path.join(__dirname, testFolderLocation, 'test-files', 'ModuleInstantiator.test.1.v')); // prettier-ignore
        let document = await vscode.workspace.openTextDocument(uri);

        let fullRange = null;
        // Range of the module in the document
        fullRange = new vscode.Range(new vscode.Position(263, 6), new vscode.Position(295, 0));

        let container = document.getText(fullRange).replace(/^\s+|\s+$/g, '');
        // Replace multiple space with a single space
        container = container.replace(/ +/g, ' ');

        uri = vscode.Uri.file(path.join(__dirname, testFolderLocation, 'test-files', 'ModuleInstantiator.test.2.v'));
        document = await vscode.workspace.openTextDocument(uri);

        fullRange = new vscode.Range(new vscode.Position(121, 0), new vscode.Position(133, 0));

        const instance = document.getText(fullRange).trim();

        let actualInstance;

        try {
            actualInstance = formatInstance('golden', container).trim();
        } catch (error) {
            assert.fail(`formatInstance produced an error: ${error}`);
        }

        if (os.platform() === 'win32') {
            actualInstance = actualInstance.replace(/\n/g, '\r\n');
            actualInstance = actualInstance.replace(/\r\r/g, '\r');
        }

        assert.strictEqual(actualInstance, instance);
    });
});
