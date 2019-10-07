<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    version="2.0">
    
    <xsl:output method="xhtml" indent="yes" encoding="UTF-8"/>
    
    <xsl:template match="/">
        <html>
            <head>
                <title>Arqueossítio</title>
                <meta charset="UTF-8"/>
                <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
            </head>
            <body>
                <xsl:apply-templates/>
            </body>
        </html>       
    </xsl:template>
    
    <xsl:template match="ARQELEM">
        <xsl:result-document href="DWeb2019/TPC3/website/arq-{generate-id()}.html">
            <table class="w3-table">
                <tr>
                    <th>Identificação</th><td><xsl:value-of select="IDENTI"/></td>
                </tr>
                <tr>
                    <th>Descrição</th><td><xsl:value-of select="DESCRI"/></td>
                </tr>
                <tr>
                    <th>Lugar</th><td><xsl:value-of select="LUGAR"/></td>
                </tr>
                <tr>
                    <th>Freguesia</th><td><xsl:value-of select="FREGUE"/></td>
                </tr>
                <tr>
                    <th>Concelho</th><td><xsl:value-of select="CONCEL"/></td>
                </tr>
                <tr>
                    <th>Código Administrativo</th><td><xsl:value-of select="CODADM"/></td>
                </tr>
                <tr>
                    <th>Latitude</th><td><xsl:value-of select="LATITU"/></td>
                </tr>
                <tr>
                    <th>Longitude</th><td><xsl:value-of select="LONGIT"/></td>
                </tr>
                <tr>
                    <th>Altitude</th><td><xsl:value-of select="DESCRI"/></td>
                </tr>
            </table>
            <h2>Acesso ao Local</h2>
            <p>
                <xsl:value-of select="ACESSO"/>
            </p>
            <h2>Quadro</h2>
            <p>
                <xsl:value-of select="QUADRO"/>
            </p>
            <h2>Descoberta Arqueológica</h2>
            <p>
                <xsl:value-of select="DESARQ"/>
            </p>
            <h2>Trabalho Arqueológico</h2>
            <p>
                <xsl:value-of select="TRAARQ"/>
            </p>
            <h2>Interpretação</h2>
            <p>
                <xsl:value-of select="INTERP"/>
            </p>
            <h2>Bibliografia</h2>
            <ul>
                <xsl:apply-templates select="BIBLIO"/>
            </ul>
            <p>
                Autor deste arqueossítio é <xsl:value-of select="AUTOR"/> na data de <xsl:value-of select="DATA"/>
            </p>
        </xsl:result-document>
    </xsl:template>
    
    <xsl:template match="BIBLIO">
        <li><xsl:copy-of select="."></xsl:copy-of></li>
    </xsl:template>
    
    <xsl:template match="IMAGEM">
        <tr>
            <th>Imagem</th><td><xsl:value-of select="@NOME"/></td>
        </tr>
    </xsl:template>
</xsl:stylesheet>